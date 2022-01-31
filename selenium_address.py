import pickle
import time
import os

from curses import KEY_DOWN, KEY_ENTER
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import read_selenium_data

driver = webdriver.Firefox()
#driver = ""


def open_web_page(url: str) -> None:
    """ Opens a web page for predefined address.
    This module is reading only immoweb ads
    :url: web address
    """
    driver.implicitly_wait(2)
    driver.get(url)


def read_address() -> str:
    """ This reads the address from the website
    """
    prop_location = driver.find_elements(
        By.XPATH, '//div[@class="classified__information--address"]')
    if prop_location == None or len(prop_location) == 0:
        return ""
    return prop_location[0].text


def read_price() -> str:
    """ 
    This reads the address from the website
    """
    prop_price_list = driver.find_elements(
        By.XPATH, '//p[@class="classified__price"]')  #.text.split("\n")
    if prop_price_list == None or len(prop_price_list) == 0:
        return ""
    raw_prop_price = prop_price_list[0].text.split("\n")[0]

    return raw_prop_price


def accept_cookies() -> None:
    """In the website has a dialog that ask us to accept cookies. We have to close 
    it. Otherwise is will distract our search"""
    time.sleep(5)
    button = driver.find_elements(By.XPATH, "//*[@id='uc-btn-accept-banner']")
    if button:
        button[0].click()


def write_dump(savecollected_list: list, file_name: str) -> None:
    open_file = open(file_name, "wb")
    pickle.dump(savecollected_list, open_file)
    open_file.close()


def read_dump(file_name) -> None:
    open_file = open(file_name, "rb")
    loaded_list = pickle.load(open_file)
    open_file.close()
    return loaded_list


def run_the_code():
    name = "HOUSE_CASTLE.txt"
    html_list = read_selenium_data.read_file(name)
    cookies_accepted = False
    for inner_list in html_list:
        url = inner_list[2]
        open_web_page(url)
        if not cookies_accepted:
            accept_cookies()
        address = read_address()
        price = read_price()
        if address == "" or price == "":
            continue
        inner_list.append(read_address())
        inner_list.append(read_price())
    name_base = name.split(".")
    new_name = "./data/" + name_base[0] + ".pkl"
    write_dump(html_list, new_name)
    driver.quit()
    print(html_list)


run_the_code()
#driver.quit()

#print(read_dump("HOUSE_CASTLE.pkl"))
"""sample_list = [1, 2, 3, 4, 5]
write_dump(sample_list, "./data/sample.pkl")
print("toimiiko tää?", read_dump("./data/sample.pkl"))
#driver.quit()"""

#
"""open_web_page(
    "https://www.immoweb.be/en/classified/house/for-sale/ombret-rawsa/4540/9728478"
)
read_address()
read_price()
driver.quit()"""

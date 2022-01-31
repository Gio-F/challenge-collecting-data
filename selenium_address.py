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


def open_web_page(url: str) -> None:
    """ Opens a web page for predefined address.
    This module is reading only immoweb ads
    :url: web address
    """
    driver.implicitly_wait(2)
    driver.get(url)


def read_address() -> int:
    """ This reads the address from the website
    """
    prop_location = driver.find_element(
        By.XPATH, '//div[@class="classified__information--address"]').text
    print("Location", prop_location)
    return prop_location


def read_price() -> int:
    """ 
    This reads the address from the website
    """
    raw_prop_price = driver.find_element(
        By.XPATH, '//p[@class="classified__price"]').text.split("\n")
    prop_price = raw_prop_price[0]
    print("Price:", prop_price)
    return prop_price


def accept_cookies() -> None:
    """In the website has a dialog that ask us to accept cookies. We have to close 
    it. Otherwise is will distract our search"""
    time.sleep(5)
    button = driver.find_elements(By.XPATH, "//*[@id='uc-btn-accept-banner']")
    if button:
        button[0].click()


def write_dump(savecollected_list: list, filename: str) -> None:
    file_name = "sample.pkl"
    open_file = open(filename, "wb")
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
    counter = 0  #Let's start with 5 files first
    for inner_list in html_list:
        counter += 1
        if counter > 3:
            break
        url = inner_list[2]
        print(url)
        open_web_page(url)
        time.sleep(1)
        inner_list.append(read_address())
        inner_list.append(read_price())
    pure_name = name.split(".")

    print(html_list)
    driver.quit()


#run_the_code()
"""open_web_page(
    "https://www.immoweb.be/en/classified/house/for-sale/ombret-rawsa/4540/9728478"
)
read_address()
read_price()
driver.quit()"""

Name = "HOUSE_CASTLE.txt".split(".")
NewName = Name[0] + ".pd"
print(NewName)
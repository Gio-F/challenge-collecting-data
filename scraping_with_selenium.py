import bs4
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
import selenium
import os
"""
TODO links_to_adds = [] includes also links to add as well. There is clear difference,
as you can see these examples:
linkki: https://www.immoweb.be/en/classified/farmhouse/for-sale/tienen/3300/9689516?searchId=61f3e0d6379bf
linkki: https://www.immoweb.be/en/classified/farmhouse/for-sale/grace-hollogne/4460/9668236?searchId=61f3e0d6379bf
linkki: https://www.immoweb.be/en/classified/house/for-sale/braine-lalleud/1420/9672579
linkki: https://www.immoweb.be/en/classified/apartment/for-sale/braine-lalleud/1420/9727789
They are no longer 'farmhouse', but other type of houses, like house or apartment.

"""

os.system('cls' if os.name == 'nt' else 'clear')  # clear the terminal
"""open web browser"""
url = "https://www.immoweb.be/en/advanced-search/house/for-sale?countries=BE&page=1&orderBy=relevance"
driver = webdriver.Firefox()
driver.implicitly_wait(5)
driver.get(url)
print("=" * 100)


def select_checkbox() -> None:
    """Let's locate the 'Farmhouse' checkbox and click it."""
    check_box = driver.find_element(By.XPATH, "//label[@for='FARMHOUSE']")
    check_box.click()
    if check_box.is_selected:  #just to make sure it's really selected
        print("Farmhouse is selected")
    else:
        print("Farmhouse is not selected, let try again")
        check_box.click()
    driver.implicitly_wait(1)


def press_search() -> None:
    """Locate 'SEARCH'-button and press it"""
    python_button = driver.find_element(
        By.XPATH,
        "//button[@class='button button--primary form__field-submit__button']")
    python_button.click()
    driver.implicitly_wait(2)
    print("=" * 100, "SEARCH has been pressed")


links_to_ads = []


def collect_ads() -> list:
    """Collect all the links to ads (links_to_adds -list), returns the list"""
    python_https_address = driver.find_elements(
        By.XPATH, "//a[@class='card__title-link']")
    print("### number of elements:", len(python_https_address))
    for i in python_https_address:
        print("linkki:", i.get_attribute("href"))  #null
        print("class:", i.get_attribute("aria-label"))  #null
        print("aria-label:", i.get_attribute("aria-label"))  #null
        print("a:", i.get_attribute("a"))  #null
        #print("parent:", i.parent()) #this does not work
        links_to_ads.append(i.get_property("href"))
    return links_to_ads
    driver.implicitly_wait(2)


def open_next_page() -> None:
    """Locate 'Next page' http and open the link"""
    next_page = driver.find_element(
        By.XPATH,
        "//a[@class='pagination__link pagination__link--next button button--text button--size-small']"
    )
    print("=" * 50, "Nappi löytyi!!!", "=" * 50)
    url = next_page.get_property("href")
    print(url)
    driver.get(url)
    print("=" * 100, "Next page link should be opened")
    driver.implicitly_wait(2)


counter = 0


def is_there_next_page() -> bool:
    """Check if there is a next page, if not return False, otherwise True"""
    """try:
        next_page = driver.find_element(
            By.XPATH,
            "//a[@class='pagination__link pagination__link--next button button--text button--size-small']"
            "")
    except:
        return False"""
    if counter > 7:
        return False


select_checkbox()  # TODO: parameter could change the checkbox
press_search()
next_page_exists = True
#while next_page_exists:
collect_ads()  # TODO: save to the file
open_next_page()
print("toimi loppuun saakka")

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import bs4
from bs4 import BeautifulSoup
import pandas as pd

# NOTE: Commenting this out since I have created a local copy of the webpage.
"""
# Testing 1 listing in bungalow sub-property type
# https://www.immoweb.be/en/classified/bungalow/for-sale/sint-eloois-vijve/8793/9715854?searchId=61f3d1c4b43a8

listing_url = "https://www.immoweb.be/en/classified/bungalow/for-sale/sint-eloois-vijve/8793/9715854?searchId=61f3d1c4b43a8"

driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.get(listing_url)

# Using Beautiful soup to get contents of listing
soup = BeautifulSoup(driver.page_source, "lxml")


"""
# Creating empty lists for data point collection
# Note: type of property (house), sub-type (bungalow), type of sale (exclusion of life sales) already configured.
locality = []
price = []
num_of_rooms = []
area = []
equipped_kitchen = []
furnished = []

with open("./Immoweb_Listing_Apartment.html", "r") as output_file:
    soup_1 = BeautifulSoup(output_file, "lxml")

# Getting locality. Split the output into a list of strings and extract only name of locality
for elem in soup_1.find("div", {"class": "classified__information--address"}):
    prop_location = (elem.text).split("\n")
    prop_location_wo_spaces = prop_location[6].split(" ")
    locality.append(prop_location_wo_spaces[-1])

print(locality)

# Contents[0] returns price of property + HTML tags.
# To extract price run text on contents
prop_price = soup_1.find("p", {"class": "classified__price"}).contents[0].text
price.append(prop_price)

print(price)
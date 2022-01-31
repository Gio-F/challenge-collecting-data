import bs4
import requests
from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import json
import re
import lxml.html
import time
import random
from random import randint
import logging
import collections
from time import gmtime, strftime

import re
from tabulate import tabulate
import os

date = strftime("%Y-%m-%d")

import selenium

# The selenium.webdriver module provides all the implementations of WebDriver
# Currently supported are Firefox, Chrome, IE and Remote. The `Keys` class provides keys on
# the keyboard such as RETURN, F1, ALT etc.
#from selenium import webdriver
#from selenium.webdriver.common.keys import Keys# Here, we create instance of Firefox WebDriver.
#from selenium.webdriver.firefox.options import Options #import Options to open FF in venv
#from selenium.webdriver.common.by import By # should avoid warning `find_element_by_* commands are deprecated` 

#firefox_options = Options()
#firefox_options.add_argument("--headless")
#driver = webdriver.Firefox(options=firefox_options)

url_castle = "https://www.immoweb.be/en/classified/castle/for-sale/overijse/3090/9219731?searchId=61f3dec5d2744"

r = requests.get(url_castle)

print(url_castle, r.status_code)
soup = BeautifulSoup(r.content, "lxml")
soup

for elem in soup.find_all("th"):
    print(elem.text)

#for elem in soup.find_all("table", attrs={"class": "classified-table__row"}):
   # print(elem)
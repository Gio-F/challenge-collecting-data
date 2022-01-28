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

print("Hello world")

import selenium

# The selenium.webdriver module provides all the implementations of WebDriver
# Currently supported are Firefox, Chrome, IE and Remote. The `Keys` class provides keys on
# the keyboard such as RETURN, F1, ALT etc.
from selenium import webdriver
from selenium.webdriver.common.keys import Keys# Here, we create instance of Firefox WebDriver.
from selenium.webdriver.firefox.options import Options #import Options to open FF in venv

firefox_options = Options()
firefox_options.add_argument("--headless")

driver = webdriver.Firefox(options=firefox_options)

print("Hello again")
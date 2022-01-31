from cgitb import text
import bs4 as bs
from bs4 import BeautifulSoup
import requests
import time
import read_selenium_data
import selenium
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By

html_list = read_selenium_data.read_file("HOUSE_CASTLE.txt")

url = html_list[3][2]
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
classifield_table = soup.find_all('table', class_='classified-table')


def read_classifield_table(classifield_table):

    driver = webdriver.Firefox()
    driver.implicitly_wait(30)
    driver.get(url)

    # Save property location in prop_location variable.
    prop_location = driver.find_element(
        By.XPATH, '//div[@class="classified__information--address"]').text
    print(prop_location)

    # Save property price in prop_price variable.
    raw_prop_price = driver.find_element(
        By.XPATH, '//p[@class="classified__price"]').text.split("\n")
    prop_price = raw_prop_price[0]
    print(prop_price)

    for info in classifield_table.find_all('tbody'):
        rows = info.find_all('tr')
        print("-" * 100)
        for row in rows:
            if not row.find_all('th', class_='classified-table__header'):
                #print("=====> Header missing!")
                continue
            if not row.find_all('td', class_='classified-table__data'):
                #print("=====> Data missing!")
                continue
            detail_header = row.find(
                'th', class_='classified-table__header').contents[0].strip()
            detail_data = row.find(
                'td', class_='classified-table__data').contents[0].strip()
            if not detail_data or not detail_header:
                print(
                    #"=====> Detail data or header is missing <=====    header:",
                    detail_header,
                    ",  data:",
                    detail_data)
            else:
                print(detail_header, "/", detail_data)


#FOR REST OF THE INFORMATION
for one_table in classifield_table:
    read_classifield_table(one_table)
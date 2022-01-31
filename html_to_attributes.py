import bs4 as bs
from bs4 import BeautifulSoup
import requests
import time
import read_selenium_data
import pandas as pd
import selenium_address

#remove this:
#html_list = read_selenium_data.read_file("HOUSE_CASTLE.txt")

html_list = selenium_address.read_dump("HOUSE_CASTLE.pkl")

my_dictionary = {}

url = html_list[3][2]
print(url)
r = requests.get(url)
soup = BeautifulSoup(r.text, 'lxml')
classifield_table = soup.find_all('table', class_='classified-table')


def read_immoweb_code() -> None:
    """ Reads immoweb ID code. This is used to identify properties"""
    print("IMMOWEB CODE")
    code_info = soup.find('div', class_="classified__header--immoweb-code")
    for code_rows in code_info.find_all('div'):
        print(code_rows)


def read_classifield_table(classifield_table):
    """Uses BeaurifulSoup library to read websites from ImmoWeb"""
    for info in classifield_table.find_all('tbody'):
        rows = info.find_all('tr')
        print("-" * 100)
        for row in rows:
            if not row.find_all('th', class_='classified-table__header'):
                print("=====> Header missing!")
                continue
            if not row.find_all('td', class_='classified-table__data'):
                print("=====> Data missing!")
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
            my_dictionary[detail_header] = detail_data
    print(my_dictionary)


#For immoweb ID code
#read_immoweb_code()

#FOR REST OF THE INFORMATION
#for one_table in classifield_table:
#    read_classifield_table(one_table)

"""
This module reads immoweb -property ads using beautiful soup. It
extracts item specific information from tables for example 'building year',
'number of rooms', 'surface area', 'price' and 'postal code'
"""

from nturl2path import url2pathname
import bs4 as bs
from bs4 import BeautifulSoup
import requests
import time
import pandas as pd
import serialize_lists
import re
import read_selenium_data


class ImmowebSoup:
    """This class reads information from immoweb properties and
    stores them to a file as a dictonary. Information includes
    the price, postal_code, immoweb_id and content of all the 
    tables. This is "raw" data and meant to be process further. 
    """

    _compiled_post_code = re.compile("(/[0-9]{4}/)")
    _compiled_immoweb_id = re.compile("(/[0-9]+\?)")
    _compiled_price = re.compile("(>[0-9]+<)")

    def __init__(self, selenium_list) -> None:
        """Constructor """
        self._my_dictionary = {}
        #self._url = []  #list[0][2]
        #for i in html_list:
        #    print(i[2])
        self._my_dictionary = {}
        #self._soup = object

        #TODO HTML osoite sisältää osoitetiedon!!!!

    def _read_html_code(self, url, compiled_code):
        postal_code = compiled_code.findall(url)
        if postal_code == None or len(postal_code) == 0:
            return ""
        postal_code = postal_code[0].replace("/", "")
        postal_code = postal_code.replace("?", "")
        return postal_code

    def _initialize_soup(self, url_address: str) -> None:
        r = requests.get(url_address)
        self._soup = BeautifulSoup(r.text, 'lxml')
        #print(soup)
        self._classifield_table = self._soup.find_all(
            'table', class_='classified-table')

    def _read_price(self) -> list:
        """ Reads immoweb price. This is used to identify properties.
        There might be two prices: 'normal price' and 'sr-only'. Normally,
        they are same.
        :return: list of prices found"""
        return_list = []
        code_info = self._soup.find('p', class_="classified__price")
        for i, code_row in enumerate(code_info.find_all()):
            price = str(code_row).replace(",", "").replace("€", "")
            price = ImmowebSoup._compiled_price.findall(price)[0]
            price = price.replace(">", "").replace("<", "")
            return_list.append(price)
        return return_list

    def _read_classifield_table(self, classifield_table):
        """Uses BeaurifulSoup library to read websites from ImmoWeb
        :classifield_table: """
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
                    'th',
                    class_='classified-table__header').contents[0].strip()
                detail_data = row.find(
                    'td', class_='classified-table__data').contents[0].strip()
                if not detail_data or not detail_header:
                    pass
                    """print(
                        #"=====> Detail data or header is missing <=====    header:",
                        detail_header,
                        ",  data:",
                        detail_data)"""
                else:
                    print(detail_header, "/", detail_data)
                    self._my_dictionary[detail_header] = detail_data

    def main(self):
        """Testing different methods"""
        if False:  #True
            self._read_immoweb_code()
        elif False:  #False
            self.initialize_soup(self)
            for one_table in self._classifield_table:
                self._read_classifield_table(one_table)
        elif False:  #False
            for i in html_list:
                url = i[2]
                print(url)
                post_code = self._read_html_code(
                    url, ImmowebSoup._compiled_post_code)
                immoweb_id = self._read_html_code(
                    url, ImmowebSoup._compiled_immoweb_id)
                print("POST CODE:", post_code)
                print("IMMOWEB_ID:", immoweb_id)
            print("TOTAL COUNT:", len(html_list))
        elif True:
            #self._initialize_soup() #This should be done once for every page
            for list_row in selenium_list:
                url_address = list_row[2]
                self._my_dictionary["Immoweb ID"] = self._read_html_code(
                    url, ImmowebSoup._compiled_immoweb_id)
                self._my_dictionary["Property type"] = list_row[0]
                self._my_dictionary["property sub-type"] = list_row[1]
                self._my_dictionary["Post code"] = self._read_html_code(
                    url, ImmowebSoup._compiled_post_code)
                self._my_dictionary["url"] = url_address


#html_list = serialize_lists.read_dump("./data/HOUSE_CASTLE.pkl")
selenium_list = read_selenium_data.read_file("HOUSE_TOWN_HOUSE.txt")

tmp_list = selenium_list[0:3]
print(tmp_list)
#for list_item in html_list:
#    print(list_item)

if __name__ == "__main__":
    my_obj = ImmowebSoup(tmp_list)
    my_obj.main()

# Importing the required libraries

import urllib
from urllib.request import urlopen, Request
import requests
import pandas as pd
from bs4 import BeautifulSoup


# Downloading contents of the web page
url = "https://www.immoweb.be/en/classified/castle/for-sale/overijse/3090/9219731?searchId=61f3dec5d2744"

#use useragent to avoid error 403 Forbidden (tell site u r a browser)
#html = urllib.request.urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read()

#for table in html:

#def get_tables(url):
    #use useragent to avoid error 403 Forbidden (tell site u r a browser)
html = urllib.request.urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read()
print(pd.read_html(html, attrs = {'class': 'classified-table'},  flavor='bs4', thousands ='.'))

    #return df_pandas

#  TODO export from pandas Dataframe (.Dataframe) to csv
# table = get_table(url_castle)
# table.to_csv(f"Prop_info.csv", index=False)


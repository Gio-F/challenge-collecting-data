"""
This module is for reading files that scraping_with_selenium -module creates.
This module can be used directly or used as an example
"""
import os
import re


def read_file(filename: str) -> list:
    """
    'scraping_with_selenium' writes files with special format. This
    method can read the format and return the result as a list
    :return: a list of lists. the inside lists has three elements:
    1. is the item a House or Apartment
    2. Suptype, for example farmhouse, villa etc.
    3. html address where the actual ad is
    This method returns the list for only one file at a time (one
    type of subtype at a time)
    """
    destination_file = os.path.join("data", filename)
    result = []
    final_result = []
    with open(destination_file, "r") as my_file:
        result = my_file.readlines()
    print("reslt length ", len(result))
    result = result[0].split("<#END>")
    print("reslt length ", len(result))
    print("---> result[1]:", result[1])

    result.pop()
    for i in result:
        line = re.split("<#COL>|<COL>", i)
        final_result.append(line)
    return final_result


def all_files() -> list:
    """
    'scraping_with_selenium' writes files with special format. This
    method can read the format and return the result as a list
    :return: a list of lists. the inside lists has three elements:
    1. is the item a House or Apartment
    2. Suptype, for example farmhouse, villa etc.
    3. html address where the actual ad is
    This method returns all the properties
    """
    counter = 0
    all_documents = os.listdir("data/")
    result = []
    for i in all_documents:
        if i.endswith("txt"):
            my_list = read_file(i)
            print(f"Filename: {i}, length: {len(my_list)}")
            counter += len(my_list)
            for row in my_list:
                result.append(row)
    print("counter:", counter)
    print("result:", len(result))
    print(result[0])
    return result

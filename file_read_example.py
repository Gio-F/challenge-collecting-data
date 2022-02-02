import serialize_lists
import pandas as pd
from math import ceil
import serialize_lists

#for list_row in my_list:
#    print(list_row)

#print(my_list[0])
my_list = serialize_lists.read_dump("./data/MERGED_LIST.NLTK")
#my_list = serialize_lists.read_dump("./data/APARTMENT_DUPLEX.attributes")

#my_list = my_list[:14555]
#print("=" * 100)
#print(my_list[:2])
#print("=" * 100)
all_keys = []
#14561
#print(tmp_list)


def _read_all_keys(tmp_list: list, total_count: int):
    print(len(tmp_list))
    counter = 0
    for property_dict in tmp_list:
        row_keys = property_dict.keys()
        for single_key in row_keys:
            if single_key not in all_keys:
                counter += 1
                all_keys.append(single_key)
    print("counter:", counter)
    if counter != total_count:
        pass
        #print("########## Count is not matching! #############, counter:",
        #      counter, "_total_count", total_count)


def read_all_keys():
    counter = 0
    for inner_list in my_list:
        print(len(inner_list), type(inner_list))
        for my_dict in inner_list:
            dict_keys = my_dict.keys()
            for dict_key in dict_keys:
                if dict_key not in all_keys:
                    counter += 1
                    all_keys.append(dict_key)
    print("counter", counter)
    serialize_lists.write_dump(all_keys, "./data/All_uniq_attributes.NLTK")
    print(all_keys)


Immoweb_ID = []
Property_type = []
property_sub_type = []
price = []
post_code = []
building_condition = []
kitchen_type = []
bedrooms = []
furnished = []
terrace_surface = []
tenement_building = []
number_of_frontages = []
swimming_pool = []
how_many_fireplaces = []
garden = []
garden_orientation = []
garden_surface = []
terrace = []
surface_of_the_plot = []

dict_for_csv_lists = {
    'Immoweb ID': Immoweb_ID,
    'Property type': Property_type,
    'property sub-type': property_sub_type,
    'Price': price,
    'Post code': post_code,
    'Building condition': building_condition,
    'Kitchen type': kitchen_type,
    'Bedrooms': bedrooms,
    'Furnished': furnished,
    'Terrace surface': terrace_surface,
    'Tenement building': tenement_building,
    'Number of frontages': number_of_frontages,
    'Swimming pool': swimming_pool,
    'How many fireplaces?': how_many_fireplaces,
    'Garden': garden,
    'Garden orientation': garden_orientation,
    'Garden surface': garden_surface,
    'Terrace': terrace,
    'Surface of the plot': surface_of_the_plot
}


def prepare_csv_list():
    for inner_list in my_list:
        for my_dict in inner_list:
            for wkey in dict_for_csv_lists.keys():
                value = object
                if wkey in my_dict.keys():
                    value = my_dict[wkey]
                else:
                    value = None
                correct_list = dict_for_csv_lists[wkey]
                correct_list.append(value)


prepare_csv_list()

df = pd.DataFrame(dict_for_csv_lists)
print("DF should be here", str(df))
df.to_csv("./data/Final_result.csv", index=False)

#print(dict_for_csv_lists['Immoweb ID'])
"""for i in dict_for_csv_lists.keys():
    list = dict_for_csv_lists[i]
    print("length", i, len(list))"""

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
    'Terrace': terrace,
    'Surface of the plot': surface_of_the_plot
}


def kitchen_type(wkey, value):
    if len(value) == 0 or value == 'No':
        return 0
    return 1


def furnished(wkey, value):
    if value == 'No':
        return 0
    if value == 'Yes':
        return 1
    return None


def convert_values(wkey, value):
    if wkey == 'Kitchen type':
        return kitchen_type(wkey, value)
    if wkey == 'Furnished':
        return furnished(wkey, value)

    if value == 'No':
        return 0
    elif value == 'Yes':
        return 1
    if wkey == 'Kitchen type':
        if len(value) > 0:
            return 1
        else:
            return 0
    return value


def prepare_csv_list():
    for inner_list in my_list:
        for my_dict in inner_list:
            for wkey in dict_for_csv_lists.keys():
                value = object
                if wkey in my_dict.keys():
                    value = convert_values(wkey, my_dict[wkey])
                else:
                    value = None
                correct_list = dict_for_csv_lists[wkey]
                correct_list.append(value)


def create_csv_file():
    df = pd.DataFrame(dict_for_csv_lists)
    df.to_csv("./data/Final_result.csv", index=False)


def remove_duplicates():
    data = pd.read_csv("./data/Final_result.csv")
    data.drop_duplicates(subset="Immoweb ID", keep=False, inplace=True)
    data.to_csv("./data/Final_result_wo_duplicates.csv", index=False)


prepare_csv_list()
create_csv_file()
remove_duplicates()
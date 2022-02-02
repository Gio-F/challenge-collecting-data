import serialize_lists
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


wanted_keys = [
    'Immoweb ID', 'Property type', 'property sub-type', 'Price', 'Post code',
    'Building condition', 'Kitchen type', 'Bedrooms', 'Furnished',
    'Terrace surface', 'Tenement building', 'Number of frontages',
    'Swimming pool', 'How many fireplaces?', 'Garden', 'Garden orientation',
    'Garden surface', 'Terrace', 'Surface of the plot'
]

#csv_lst_dict[Immoweb ID] =Immoweb_ID

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


def prepare_csv_list():
    for inner_list in my_list:
        for my_dict in inner_list:
            for wkey in wanted_keys:
                if wkey in my_dict.keys():
                    value = my_dict[wkey]

    pass


prepare_csv_list()
"""def read_dictonaries():
    for inner_list in my_list:
        for my_dict in inner_list:
            for wkey in wanted_keys:
                if wkey in my_dict.keys():
                    pass"""
"""
my_list3 = []
my_list3.append(None)
my_list3.append(None)
print(len(my_list3))"""

#read_required_attributes()


#read_all_keys()
def read_required_attributes():
    for inner_list in my_list:
        print(len(inner_list), type(inner_list))
        for my_dict in inner_list:
            for key, value in my_dict.items():
                print(value)
                if key not in wanted_keys:
                    my_dict.pop(key)
    print(inner_list)

    #my_reduced_list = list(x:inner_list[x] for x in keys)
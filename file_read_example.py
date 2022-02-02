import serialize_lists
from math import ceil

#for list_row in my_list:
#    print(list_row)

#print(my_list[0])
my_list = serialize_lists.read_dump("./data/MERGED_LIST.NLTK")
#my_list = serialize_lists.read_dump("./data/APARTMENT_DUPLEX.attributes")

tmp_list = my_list[14561:]
print("=" * 100)
print(tmp_list)
print("=" * 100)
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
        print("########## Count is not matching! #############, counter:",
              counter, "_total_count", total_count)


#_read_all_keys(tmp_list, len(my_list))
#print("ALL KEYS ARE: ", all_keys)


def read_list_in_patches() -> None:
    my_list = serialize_lists.read_dump("./data/MERGED_LIST.NLTK")
    total_count = len(my_list)
    tmp_list = []
    remaining_list = my_list
    list_len = len(my_list)
    size = 100  #how many list are read at one time
    rounds = int(ceil(list_len / size))
    for i in range(0, rounds):
        tmp_list = remaining_list[0:size]
        remaining_list = remaining_list[size:]
        _read_all_keys(tmp_list, total_count)


#read_list_in_patches()

#print(all_keys)
#print(len(all_keys))

# keys = []
# keys = my_dict.keys()
# values = my_dict.values()

# for i in keys:
#     print(i, "/", my_dict[i])

# print("NUMBER:", len(keys))

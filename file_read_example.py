import serialize_lists

my_list = serialize_lists.read_dump("./data/HOUSE_TOWN_HOUSE.attributes")
#for list_row in my_list:
#    print(list_row)

print(my_list[0])

my_dict = my_list[0]

keys = []
keys = my_dict.keys()
values = my_dict.values()

for i in keys:
    print(i, "/", my_dict[i])

print("NUMBER:", len(keys))

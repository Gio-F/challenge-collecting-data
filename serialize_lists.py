import pickle
import os


def write_dump(list_to_save: list, file_name: str) -> None:
    """Writes an object to file in a binary format.
    :list_to_save : A list that we want to write file
    :file_name: A string that contains the file name
    """
    open_file = open(file_name, "wb")
    pickle.dump(list_to_save, open_file)
    open_file.close()


def read_dump(file_name: str) -> list:
    """Reads a list from binary file and returns it
    :file_name : A string that contains the file name
    :return: A list that was read from the file
    """
    open_file = open(file_name, "rb")
    loaded_list = pickle.load(open_file)
    open_file.close()
    return loaded_list


def merge_files() -> list:
    """
    merges all the .attribute -files
    """
    counter = 0
    merged_list = ['a']
    all_files = os.listdir("./data/")
    print("toimiiko tämä?")
    for single_file in all_files:
        if single_file.endswith(".attributes"):
            print(single_file)
            tmp_list = read_dump("./data/" + single_file)
            merged_list = join_lists(merged_list, tmp_list)
            counter += len(tmp_list)
            merged_list.append(tmp_list)
    print("Merged list length:", len(merged_list))
    print("Total length:", counter)
    write_dump(merged_list, "./data/MERGED_LIST.NLTK")


def join_lists(base_list: list, list_to_add: list) -> list:
    for row in list_to_add:
        base_list.append(row)
    return base_list


#merge_files()
import { SearchIcon } from "lucide-react";
import { Heart } from "lucide-react";
import { Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { users } from "../../data";
import  InsLogo  from "../../assets/logo/instagram.png";
import { useAsyncList } from "@react-stately/data";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
function TopNav() {
  let list = useAsyncList({
    async load({ signal, filterText }) {
      let res = await fetch(
        `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();
      json.results = users.filter((item) => {
        return item.name.toLowerCase().includes(filterText.toLowerCase());
      });
      console.log(json.results);
      return {
        items: json.results,
      };
    },
  });
  return (
    <div className=" fixed block z-50 w-full light:bg-white md:hidden h-[60px] border-b-[1px] border-gray-700">
      <div className="flex justify-between items-center h-full">
        <Link to={"/"}>
          <img
            src={InsLogo}
            alt="logo"
            className="w-[100px] h-[30px] ml-4 cursor-pointer dark:hidden"
          ></img>
        </Link>
        <Link to={"/"}>
          <img
            src={InsLogo}
            alt="logo"
            className="w-[90px] h-[30px] ml-2 mr-6  cursor-pointer light:block"
          ></img>
        </Link>

        <div className="flex items-center w-80 gap-2">
          <div className="flex items-center w-full">
            <Autocomplete
              inputValue={list.filterText}
              isLoading={list.isLoading}
              items={list.items}
              disableSelectorIconRotation
              onInputChange={list.setFilterText}
              placeholder="Search"
              labelPlacement="inside"
              className="max-w-xs"
              startContent={<SearchIcon className="text-zinc-500 " size={28} />}
            >
              {list.filterText !== "" ? (
                (item) => (
                  <AutocompleteItem
                    key={item.id}
                    textValue={item.name}
                    className="capitalize"
                  >
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={item.name}
                        className="flex-shrink-0"
                        size="sm"
                        src={item.avatar}
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{item.name}</span>
                        <span className="text-tiny text-default-400">
                          {item.email}
                        </span>
                      </div>
                    </div>
                  </AutocompleteItem>
                )
              ) : (
                <AutocompleteItem isDisabled>
                  No recent searches.
                </AutocompleteItem>
              )}
            </Autocomplete>
          </div>

          <Link to={"/"}>
            <Tooltip content="heart">
              <Heart
                className="mr-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                size={28}
              />
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

import React from "react";
import type { MenuProps } from 'antd';
import { Dropdown, Flex, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const Header: React.FC = () => {
  return (
    <Flex className="header" justify="center">
      <Flex
        className="wrap"
        justify="space-between"
        align="stretch"
        style={{ height: "100%" }}
      >
        <div className="header__logo" />
        <Menu
          className="header__menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Главная
            </Menu.Item>
          </Dropdown>
          <Menu.Item key="2" icon={<UserOutlined />}>
            О нас
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            Контакты
          </Menu.Item>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;

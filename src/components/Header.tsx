import React from "react";
import { Flex, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <Flex className="header" justify="center">
      <Flex className="wrap" justify="space-between" align="stretch" style={{ height: "100%"}}>
        <div className="header__logo" />
        <Menu className="header__menu" theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Главная
          </Menu.Item>
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

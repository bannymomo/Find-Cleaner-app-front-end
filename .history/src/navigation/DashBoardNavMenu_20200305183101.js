
Menus 菜单
菜单在临时出现的位置上展示一系列的选项列表。
ads via Carbon
Market smarter with automated messaging tools.
ads via Carbon

A Menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.

简单菜单
默认情况下，简单菜单在锚元素上打开（此选项可以通过 props 更改）。 当靠近屏幕边缘时，简单菜单会在垂直方向上重新对齐，以确保所有菜单子项都完全可见。

理想状态下，选择一个选项会出发即刻提交该选项并且关闭整个菜单。

解疑: 与简单菜单相比，基本对话框可以显示与一个列表项相关的其他选项的详细信息，或者提供与主要任务相关的导航类的或垂直的操作。 虽然它们可以显示相同的内容，但相对于基本对话框，我们更推荐简单菜单，因为它对用户的当前上下文干预更少。

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListRoundedIcon fontSize="large" className="nav-bar__menu-icon" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
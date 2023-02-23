import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserThunk,
  getUsersThunk,
} from "../../../redux/asyncThunk/user.asyncThunk";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { Avatar, Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Swal from "sweetalert2";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTES_DEFINATION } from "../../../constant/routes";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ToastMessage } from "../../atoms/toaster";
import { replaceUrl } from "../../../redux/constant/reduxHelper";
function UserListPage() {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  const { userList } = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e, row) => {
    setAnchorEl(row);
  };
  const handleClose = (row) => {
    setAnchorEl(null);
  };
  const deleteUserHandler = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUserThunk({ id: row?.id }))
          .unwrap()
          .then((res) => {
            Swal.fire("Deleted!", "user has been deleted.", "success");
          })
          .catch((err) => {
            console.log("err", err?.data?.message);
            ToastMessage("error", "error", err?.data?.message);
          });
      }
    });
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Profile",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value} />
            {params.value.username}
          </>
        );
      },
    },

    { field: "name", sortable: false, headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "role",
      headerName: "Role",

      width: 130,
    },
    {
      field: "password",
      headerName: "Password",
      width: 130,
    },
    // {
    //   field: "creationAt",
    //   headerName: "Created At",
    //   renderCell: (params) => {
    //     return <>{moment(params.value).format("MMMM Do YYYY, h:mm:ss a")}</>;
    //   },
    //   width: 250,
    // },
    {
      field: "Delete",
      headerName: "Delete",
      renderCell: (row) => {
        return (
          <>
            <Button
              onClick={() => deleteUserHandler(row)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </>
        );
      },

      width: 130,
    },
    {
      field: "Edit",
      headerName: "Edit",
      renderCell: (row) => {
        return (
          <>
            <Button
              onClick={() =>
                navigate(
                  replaceUrl(ROUTES_DEFINATION.UPDATE_USER, { id: row?.id })
                )
              }
              variant="outlined"
              startIcon={<CreateIcon />}
            >
              Edit
            </Button>
          </>
        );
      },

      width: 130,
    },
    {
      field: "View",
      headerName: "View",
      renderCell: (row) => {
        return (
          <>
            <Button variant="outlined" startIcon={<VisibilityIcon />}>
              View
            </Button>
          </>
        );
      },

      width: 130,
    },
  ];

  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          my: 3,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography> All user List</Typography>
        </Box>
        <Box>
          <Button
            onClick={() => navigate(ROUTES_DEFINATION.CREATE_USER_PAGE)}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Create User
          </Button>
        </Box>
      </Box>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          {...userList}
          disableSelectionOnClick={true}
          rows={userList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        ></DataGrid>
      </div>
    </>
  );
}

export default UserListPage;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { count } from 'utils/common/CommonService'
import classes from './styles.module.scss'


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));


const CommonTable = ({ totalCount, customPagination,setCustomPagination, data, keys}) => {
  const useClasses = useStyles();
  const setPage = (_, value) => {
    setCustomPagination(value)
  }

  return (
    <div className={`${classes.common_table} table-responsive`}>
      <div className={classes.scroll_table}>
      <table className="table-stripped text-nowrap">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
           { data?.length ? data.map((column, index) => (
            (<tr key={index} className={classes.hover_tr}  >
              {column.map((key, i) => (
                <td className="align-middle" key={i}>{key}</td>
              ))}
            </tr>)
            
          )): (<tr className="text-center">
          <td colSpan={keys.length}><h5>No record available</h5></td>
        </tr>) }
        </tbody>
      </table>
      </div>
      <div className={`${useClasses.root}  ${classes.pagination_wrapper} `}>
        <Pagination
          count={count(totalCount, customPagination?.limit)}
          page={customPagination?.page}
          onChange={setPage}
          color="primary"
        />
      </div>
    </div>
  );
};

export default CommonTable;

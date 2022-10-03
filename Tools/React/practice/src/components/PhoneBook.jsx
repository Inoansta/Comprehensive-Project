import React from "react";
import { useState } from "react";

const style = {
    table: {
    borderCollapse: 'collapse'
    },
    tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
    },
    form: {
    container: {
    padding: '20px',
    border: '1px solid #F0F8FF',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px'
    },
    inputs: {
    marginBottom: '5px'
    },
    submitBtn: {
    marginTop: '10px',
    padding: '10px 15px',
    border:'none',
    backgroundColor: 'lightseagreen',
    fontSize: '14px',
    borderRadius: '5px'
    }
    }
   }

function PhoneBookForm( addEntryToPhoneBook) {
    var [each, setEach] = useState({});

    var toParent = (e) => {
        e.preventDefault();
        if(each.Firstname === ''|| each.Lastname === '' || each.Phone ===''){
            return;
        }
        else{
        addEntryToPhoneBook.setData(data => data.concat(each));
        }
    }


    return (
        <form onSubmit={toParent} style={style.form.container}>
            <label>First name:</label>
                <br />
                <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
                onChange={(e) => {
                    if(e.target.value === null){
                        return;
                    }
                    else{setEach(data => {
                        return {...data, Firstname: e.target.value};  
                    })
                }
                    }}
                />
                <br/>
                <label>Last name:</label>
                <br />
                <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
                onChange={(e) => {
                    if(e.target.value === null){
                        return;
                    }
                    else{
                    setEach(data => {
                    return {...data, Lastname: e.target.value};  
                })
            }
            }}
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                onChange={(e) => {
                    if(e.target.value === null){
                        return;
                    }
                    else{
                    setEach(data => {
                    return {...data, Phone: e.target.value};  
                })
            }
            }}
                />
                <br/>
                <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
                />
        </form>
    )
   }

   function InformationTable(props) {

    return (
    <table style={style.table} className='informationTable'>
    <thead>
    <tr>
    <th style={style.tableCell}>First name</th>
    <th style={style.tableCell}>Last name</th>
    <th style={style.tableCell}>Phone</th>
    </tr>
    {
    props.parentProps.map((data, index) => {
        return(<tr key={index}>
            <td>{data.Firstname}</td>
            <td>{data.Lastname}</td>
            <td>{data.Phone}</td>
        </tr>)
    })
    }
    </thead>
    </table>
    )
}

   export {PhoneBookForm, InformationTable};
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using EastechApplication1.Models;
using System.Data;
using System.Data.SqlClient;

namespace EastechApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLogin : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserLogin(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        [HttpPost]
        public JsonResult Post(Users u)
        {
        string query = @"
                    insert into dbo.Users 
                    (userName,userEmail,userPassword)
                    values 
                    (
                    '" + u.userName + @"'
                    ,'" + u.userEmail + @"'
                    ,'" + u.userPassword + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }






    }
}

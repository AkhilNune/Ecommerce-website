using EastechApplication1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace EastechApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public JsonResult Post(login u)
        {

                string query = @"
                    select userEmail from dbo.Users where userEmail ="+u.userEmail+@" ";
            string userEmail = "akhil12@gmail.com";
            string userPassword = "Akhil@12";

            if (userEmail == u.userEmail && userPassword == u.userPassword)
            {
                return new JsonResult("Login  Successfully");

            }
            else
            {
                return new JsonResult("flase");

            }
            DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                    myReader = myCommand.ExecuteReader();
                        table.Load(myReader);


                    myReader.Close();
                        myCon.Close();

                    }
                }
        



        }


    }
}

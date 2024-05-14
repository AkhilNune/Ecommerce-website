using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastechApplication1.Models
{
    public class Purchases
    {
        public int pId { get; set; }
        public int userId { get; set; }
        public Users Users { get; set; }
        public DateTime dateofpurchase { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public char pincode { get; set; }
        public int mobileNumber { get; set; }


    }
}

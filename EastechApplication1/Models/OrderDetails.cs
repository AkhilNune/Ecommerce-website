using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastechApplication1.Models
{
    public class OrderDetails
    {
        public int sId { get; set; }
        public int userId { get; set; }
        public Users Users { get; set; }
        public string userEmail { get; set; }
        public int userNumber { get; set; }
        public string Address { get; set; }
        public int totalAmount { get; set; }
        public DateTime dateofpurchase { get; set; }
        public string orderstatus { get; set; }

    }
}

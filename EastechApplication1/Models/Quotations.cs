using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastechApplication1.Models
{
    public class Quotations
    {
        public int qId { get; set; }
        public int userId { get; set; }
        public Users Users { get; set; }
        public string userName { get; set; }
        public int userNumber { get; set; }
        public string userCompany { get; set; }
        public string description { get; set; }

    }
}

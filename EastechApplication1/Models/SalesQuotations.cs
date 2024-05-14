using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EastechApplication1.Models
{
    public class SalesQuotations
    {
        public int sid { get; set; }
        public int userId { get; set; }
        public Users Users { get; set; }
        public int empId { get; set; }
        public Employees Employees { get; set; }
        public string description { get; set; }

    }
}

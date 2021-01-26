using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagementSystem.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNumber { get; set; }
        public string EmailId { get; set; }
        public string CurrentAddress { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal CTC { get; set; }
        public bool IsActive { get; set; } = true;
        
    }
}

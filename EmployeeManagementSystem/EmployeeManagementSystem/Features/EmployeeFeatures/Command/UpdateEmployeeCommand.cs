using MediatR;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Command
{
    public class UpdateEmployeeCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Designation { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public string Department { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
    }
}

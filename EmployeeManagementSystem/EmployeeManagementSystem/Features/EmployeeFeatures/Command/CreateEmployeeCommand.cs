using MediatR;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Command
{
    public class CreateEmployeeCommand : IRequest<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNumber { get; set; }
        public string EmailId { get; set; }
        public string CurrentAddress { get; set; }
        public decimal CTC { get; set; }
    }
}

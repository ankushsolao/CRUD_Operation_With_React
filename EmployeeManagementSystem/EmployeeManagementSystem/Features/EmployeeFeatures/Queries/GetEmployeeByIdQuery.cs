using EmployeeManagementSystem.Models;
using MediatR;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Queries
{
    public class GetEmployeeByIdQuery : IRequest<Employee>
    {
        public int Id { get; set; }
    }
}

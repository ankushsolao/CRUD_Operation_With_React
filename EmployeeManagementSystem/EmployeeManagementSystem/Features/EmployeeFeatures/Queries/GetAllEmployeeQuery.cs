using EmployeeManagementSystem.Models;
using MediatR;
using System.Collections.Generic;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Queries
{
    public class GetAllEmployeeQuery : IRequest<IEnumerable<Employee>>
    {
    }
}

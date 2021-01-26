using EmployeeManagementSystem.Context;
using EmployeeManagementSystem.Features.EmployeeFeatures.Queries;
using EmployeeManagementSystem.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Handler
{
    public class GetAllEmployeeQueryHandler : IRequestHandler<GetAllEmployeeQuery, IEnumerable<Employee>>
    {
        private readonly IApplicationContext _context;
        public GetAllEmployeeQueryHandler(IApplicationContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> Handle(GetAllEmployeeQuery request, CancellationToken cancellationToken)
        {
            var employeeList = await _context.Employee.ToListAsync();
            if (employeeList == null)
            {
                return null;
            }
            return employeeList.AsReadOnly();
        }
    }
}

   
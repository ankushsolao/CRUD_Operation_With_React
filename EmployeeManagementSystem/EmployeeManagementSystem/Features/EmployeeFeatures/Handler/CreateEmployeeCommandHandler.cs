using EmployeeManagementSystem.Context;
using EmployeeManagementSystem.Features.EmployeeFeatures.Command;
using EmployeeManagementSystem.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Handler
{
    public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
    {
        private readonly IApplicationContext _context;
        public CreateEmployeeCommandHandler(IApplicationContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(CreateEmployeeCommand command, CancellationToken cancellationToken)
        {
            var employee = new Employee();
            employee.FirstName = command.FirstName;
            employee.LastName = command.LastName;
            employee.Designation = command.Designation;
            employee.MobileNumber = command.MobileNumber;
            employee.Email = command.Email;
            employee.Department = command.Department;
            employee.Address = command.Address;
            employee.City = command.City;
            employee.CreateDate = System.DateTime.Now;
            
            _context.Employee.Add(employee);
            await _context.SaveChanges();
            return employee.Id;
        }
    }
}
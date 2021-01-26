using EmployeeManagementSystem.Context;
using EmployeeManagementSystem.Features.EmployeeFeatures.Queries;
using EmployeeManagementSystem.Models;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Handler
{
    public class GetEmployeeByIdQueryHandler : IRequestHandler<GetEmployeeByIdQuery, Employee>
    {
        private readonly IApplicationContext _context;
        public GetEmployeeByIdQueryHandler(IApplicationContext context)
        {
            _context = context;
        }
        public async Task<Employee> Handle(GetEmployeeByIdQuery query, CancellationToken cancellationToken)
        {
            var employee = _context.Employee.Where(a => a.Id == query.Id).FirstOrDefault();
            if (employee == null) return null;
            return employee;
        }
    }
}

using EmployeeManagementSystem.Context;
using EmployeeManagementSystem.Features.EmployeeFeatures.Command;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Handler
{
    public class DeleteEmployeeByIdCommandHandler : IRequestHandler<DeleteEmployeeByIdCommand, int>
    {
        private readonly IApplicationContext _context;
        public DeleteEmployeeByIdCommandHandler(IApplicationContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(DeleteEmployeeByIdCommand command, CancellationToken cancellationToken)
        {
            var employee = await _context.Employee.Where(a => a.Id == command.Id).FirstOrDefaultAsync();
            if (employee == null) return default;
            _context.Employee.Remove(employee);
            await _context.SaveChanges();
            return employee.Id;
        }
    }
}
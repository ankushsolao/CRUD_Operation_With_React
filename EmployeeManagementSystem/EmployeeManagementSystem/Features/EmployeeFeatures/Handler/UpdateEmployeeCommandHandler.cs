using EmployeeManagementSystem.Context;
using EmployeeManagementSystem.Features.EmployeeFeatures.Command;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Handler
{
    public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand, int>
    {
        private readonly IApplicationContext _context;
        public UpdateEmployeeCommandHandler(IApplicationContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(UpdateEmployeeCommand command, CancellationToken cancellationToken)
        {
            var employee = _context.Employee.Where(a => a.Id == command.Id).FirstOrDefault();

            if (employee == null)
            {
                return default;
            }
            else
            {
                employee.FirstName = command.FirstName;
                employee.LastName = command.LastName;
                employee.EmailId = command.EmailId;
                employee.MobileNumber = command.MobileNumber;
                employee.CurrentAddress = command.CurrentAddress;
                employee.CTC = command.CTC;
                await _context.SaveChanges();
                return employee.Id;
            }
        }
    }
}

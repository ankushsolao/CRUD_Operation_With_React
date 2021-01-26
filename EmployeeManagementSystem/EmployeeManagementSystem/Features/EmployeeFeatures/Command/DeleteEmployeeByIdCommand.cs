using MediatR;

namespace EmployeeManagementSystem.Features.EmployeeFeatures.Command
{
    public class DeleteEmployeeByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}

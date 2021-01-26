using EmployeeManagementSystem.Features.EmployeeFeatures.Command;
using FluentValidation;
namespace EmployeeManagementSystem.Validation
{
    public class CreateEmployeeCommandValidator : AbstractValidator<CreateEmployeeCommand>
    {
        public CreateEmployeeCommandValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty().WithMessage("First Name should not be empty");

            RuleFor(x => x.LastName)
                .NotEmpty().WithMessage("Last Name should not be empty"); ;
        }
    }
}
 
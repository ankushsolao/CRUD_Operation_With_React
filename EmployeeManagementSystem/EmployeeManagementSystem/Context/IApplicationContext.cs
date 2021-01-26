using EmployeeManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Context
{
    public interface IApplicationContext
    {
        DbSet<Employee> Employee { get; set; }

        Task<int> SaveChanges();
    }
}
﻿using EmployeeManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Context
{
    public class ApplicationContext : DbContext, IApplicationContext
    {
        public DbSet<Employee> Employee { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }
        public async Task<int> SaveChanges()
        {
            return await base.SaveChangesAsync();
        }
    }
}

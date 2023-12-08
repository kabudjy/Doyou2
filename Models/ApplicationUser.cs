using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Key]
        public Guid Id {  get; set; }

        [Required]
        public bool Deleted {  get; set; }

        [Required]
        public bool Locked { get; set; }   
    }
}
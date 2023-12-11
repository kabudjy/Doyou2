using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class ApplicationUser : IdentityUser
    {
        public Guid Id {  get; set; }

        [Required]
        public bool Deleted {  get; set; } =false;

        [Required]
        public bool Locked { get; set; } = false;

        public ICollection<Favorites> Favorites { get; set; }

        public ICollection<Recipes> Recipes { get; set; }
    }
}
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public bool IsAdmin { get; set; } = false;

        [Required]
        public bool Deleted {  get; set; } =false;

        [Required]
        public bool Locked { get; set; } = false;

        [Required]
        public DateTime Created_date { get; set; } = DateTime.Now;

        public ICollection<Favorites> Favorites { get; set; }

        public ICollection<Recipes> Recipes { get; set; }
    }
}
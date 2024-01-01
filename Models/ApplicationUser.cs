using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Doyou2.Models
{
    public class ApplicationUser : IdentityUser
    {
<<<<<<< HEAD
        public Guid Id {  get; set; }
=======
        [Required]
        public bool IsAdmin { get; set; } = false;
>>>>>>> Backend-Add

        [Required]
        public bool Deleted {  get; set; } =false;

        [Required]
        public bool Locked { get; set; } = false;

        [Required]
        public DateTime Created_date { get; set; } = DateTime.Now;

        [JsonIgnore]
        public ICollection<Favorites>? Favorites { get; set; }
        
        [JsonIgnore]
        public ICollection<Recipes>? Recipes { get; set; }
    }
}
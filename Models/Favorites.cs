using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class Favorites
    {
        public Guid Id { get; set; }
        public virtual required ApplicationUser User { get; set; }

        
        public virtual required Recipes Recipe { get; set; }

    }
}

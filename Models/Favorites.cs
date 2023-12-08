using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class Favorites
    {
        [Key]
        public Guid Id { get; set; }
        public virtual required ApplicationUser UsersId { get; set; }

        public virtual required Recipes RecipesId { get; set; }

    }
}

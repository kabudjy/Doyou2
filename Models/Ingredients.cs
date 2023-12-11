using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public enum Unities { Gr, Ml, Unity}
    public class Ingredients
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public Unities unity { get; set; }

        [Required]
        public Guid RecipeId { get; set; }
    }
}

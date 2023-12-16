using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public enum Unities { Gr, Ml, Unity}
    public class Ingredients
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Quantity { get; set; }
    }
}

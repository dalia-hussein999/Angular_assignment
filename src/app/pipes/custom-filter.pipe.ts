import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log('Items:', items);
    console.log('Search Text:', searchText);
  
    if (!items || !searchText) {
      return items;
    }
  
    searchText = searchText.toLowerCase();
  
    return items.filter(item => {
      const match =
        this.containsSearchTerm(item.courseName, searchText) ||
        this.containsSearchTerm(item.author, searchText) ||
        this.containsTag(item.tags, searchText);
  
      console.log('Item:', item, 'Match:', match);
  
      return match;
    });
  }
  
  

  private containsSearchTerm(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText);
  }

  private containsTag(tags: string[], term: string): boolean {
    return tags.some(tag => tag.toLowerCase().includes(term));
  }
}



export class InMemoryDataService {
  createDb() {
    const names = [
      'Aaron Frost', 'Alex Castillo', 'Alex Eagle', 'Alex Rickabaugh',
      'Andrew Kushnir', 'Andrew Seguin', 'Asaad Saad', 'Asim Hussain',
      'Aspen Payton', 'Ben Lesh', 'Bill Odom', 'Brad Green', 'Brad Mcalister',
      'Ryan Chenkie', 'Brandon Roberts', 'Bret Mcgowen', 'Brian Love',
      'Chloe Condon', 'Chris Noring', 'Dan Muller', 'Dan Wahlin',
      'Deborah Kurata', 'Dylan Johnson', 'Elad Bezalel', 'Ely Lucas',
      'Eric Simons', 'George Kalpakas', 'Igor Minar', 'James Daniels',
      'Jason Aden', 'Jason Dobry', 'Jeff Cross', 'Jennifer Wadella',
      'Jeremy Elbourn', 'Jesse Sanders (The guy who\'s gunna give me a raise)',
      'Jo hanna Pearce', 'Joe Eames', 'Joey Perrott', 'John Niedzwiecki',
      'John Papa', 'Kaitlyn Ekdahl', 'Kamil Mysliwiec', 'Kara Erickson',
      'Katerina Skroumpelou', 'Keen Yee Liau', 'Kern Zhao', 'Kevin Schuchard',
      'Kim Maida', 'Luis Aviles', 'Manfred Steyer', 'Matias Niemelä',
      'Maxim Koretskyi', 'Maxim Salnikov', 'Melina Mejía Bedoya',
      'Michael Hladky', 'Mike Brocchi', 'Mike Hartington', 'Mike Pearson',
      'Mike Ryan', 'Miles Malerba', 'Minko Gechev', 'Nicole Oliver',
      'Rachel Noccioli', 'Rado Kirov', 'Reid Villeneuve', 'Rob Wormald',
      'Sam Julien', 'Sander Elias', 'Sani Yusuf', 'Stephen Fluin',
      'Stephen Petranek', 'Thomas Burleson', 'Tracy Lee', 'Vikram Subramanian'
    ];

    return {
      names: names.map(
        (name, index) => ({id: index, name})
      )
    };
  }
}

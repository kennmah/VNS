package org.vnsny.ref.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ReportFileComparatorTest {

	@Test
	void testIsSelected() {
		ReportFileComparator c = new ReportFileComparator(".PDF", "2021-02-01", "2021-02-15");
		
		assertFalse(c.isSelected("2021-01-29.pdf"));
		assertFalse(c.isSelected("2021-01-09.pdf"));
		assertFalse(c.isSelected("2021-2-19.pdf"));
		assertFalse(c.isSelected("2021-02-19.txt"));
		assertFalse(c.isSelected("2021-03-09.pdf"));
//		
		assertTrue(c.isSelected("2021-02-09.pdf"));
		assertTrue(c.isSelected("2021-02-10.pdf"));
		assertTrue(c.isSelected("2021-02-15.pdf"));
		assertTrue(c.isSelected("2021-02-01.001.pdf"));
		assertTrue(c.isSelected("2021-02-12.PDF"));
		assertTrue(c.isSelected("2021-02-15.back.PDF"));
		
		
	}

}
